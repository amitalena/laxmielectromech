import axios from "axios";

const useContact = (formData = null) => {
    if (formData) {
        axios.post('http://localhost:8000/api');
    }
}

export default useContact;