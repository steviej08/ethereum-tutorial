import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Post(props) {
    
    const [content, setContent] = useState("");
    const addContentHandler = props.addContent;

    return (
        <div>
            <ReactQuill
            onChange={setContent}
            placeHolder="Write your stuff..." />
            <button onClick={() => addContentHandler(content)}>Post</button>
        </div>
    )
}