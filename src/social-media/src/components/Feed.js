import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Feed(props) {

    var feed = props.feed || [];

    return feed.map((f) =>
        <ReactQuill 
            readOnly={true}
            value={f.content}
            key={f.key} />
    );
}