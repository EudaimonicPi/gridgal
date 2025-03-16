'use client'
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {imageContainerStyles, userImageStyles} from './loginStyles'
import { Dropdown } from 'react-bootstrap';
import { signOut } from 'next-auth/react';


export default function ProfilePic() {
    const {data, status} = useSession()
    const router = useRouter()
    const pathname = usePathname()
    // decompose to get all access page 

    useEffect(() => {
        // is this what should be doing the pushing? anywho... 
    if (status === 'unauthenticated') {
        return
        // if page is mod if not right user RETURN /
    }
    }, [status, router]);

    if (status === 'loading') return // other pages take care of their loading symbol
    if (status === 'authenticated') {
        return ( // this is the lil profile component
            <div style={imageContainerStyles}>
                    <Dropdown>
                    <Dropdown.Toggle as="div" id="dropdown-custom-components">
                        <img style={userImageStyles} src={data.user.image} alt={data.user.name + ' photo'} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item disabled> {data.user.name} </Dropdown.Item>
                        <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
            </div>
        )}
    return( <></>

    )}