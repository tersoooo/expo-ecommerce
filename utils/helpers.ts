const API_BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    try{
        const response = await fetch(`${API_BASE_URL}/products`);
        if(!response.ok){
            throw new Error('Ürünler bulunamadı!');
        }
        const data = await response.json();
        return data;
    }catch (err){
        console.error('API HATASI', err);
        return [];
    }
}

export const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
}