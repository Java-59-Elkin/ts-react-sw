import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.ts";

interface Hero {
    name: string,
    gender: string,
    birth_year: number,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
}

const AboutMe = () => {
    const [hero, setHero] = useState<Hero | null >(null);
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero")!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key as keyof Hero]}
                    </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;