import React ,{useState} from 'react';
import axios from 'axios';
function App(){
    const [file,setFile]=useState();
    const [files,setFiles]=useState([]);
    function handleChange(event)
    {
        setFile(event.target.files[0]);
    }
    function handleSubmit(event){
        event.preventDefault();
        const url='http://localhost:3000/uploadFile';
        const formData=new FormData();
        formData.append('file',file);
        formData.append('fileName',file.name);
        const config={
            headers:{
                'content-type':'multipart/form-data',

            },
        };
        axios.post(url,formData,config).then((response)=>{
            setFiles([...files,response.data]);
        });
    }
    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
            <div>
                {file.map((file,index)=>(
                    <img key={index} src={file} alt="Uploaded content"/>
                ))}
            </div>
        </div>
    );
}

export default App;