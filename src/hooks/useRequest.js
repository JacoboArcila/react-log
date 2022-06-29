import {useState, useEffect} from 'react';

const useRequest = (url) => {
    const [dataUser, setDataUser] = useState(null);
    useEffect(() => {
        const request = async () => {
        const response = await fetch(url);
        const result = await response.json();
        setDataUser(result);
        }
        request();
    }, [url]);
    return dataUser
}

export default useRequest