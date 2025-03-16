import {ImageInput, TextInput, BigTextInput} from '@/components/modals/subComponents/inputs'

  export default function Inputs({title, description, handleImageChange, setTitle, setDescription}) {
      return (
          <>
            {/* <p>Name Your Grid (unique)</p> */}
                        <ImageInput
                            label="Upload Image"
                            onChange={(e) => handleImageChange(e)}
                        />

                        <TextInput
                            label="Title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder={"Name Your Grid"}
                        />  

                        <BigTextInput
                            label="Grid Description"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />  
                 </>

      )
  }