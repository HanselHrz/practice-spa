import { heroes } from "../data/heroes";   

export const getHeroesByPublisher = (publisher) => {

    const validPubisher = ["DC Comics", "Marvel Comics"];
    if (!validPubisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher)
}

