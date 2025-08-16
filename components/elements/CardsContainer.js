import { getCards } from '@/utils/cards';
import PaginationControls from './PaginationPageControl';
import '@/styles/cards.css';

export default function CardsContainer({
    mod=false,
    cards, 
    setRefresh=null, 
    getEcyFavs=false,
    page,
    totalPages, 
    setPage}) {
    return (
        <>
        <div className="cards-container">
               {getCards(cards, mod, setRefresh, getEcyFavs)}
        </div>
        <PaginationControls page={page} totalPages={totalPages} setPage={setPage} />
        </>
    )
}