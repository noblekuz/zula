import React, {useEffect, useState} from "react";
import { Card, Button } from "react-bootstrap";
import ZulaBookTranslationCard from "../components/ZulaBookTranslationCard";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";
import { BooksList } from "../models";

export default function Books() {
    const [data, setData] = useState<BooksList>()
    useEffect(() => {
        fetch("http://localhost:1323/api/v1/books")
            .then(data => data.json())
            .then(jsonData => setData(jsonData))
    }, [])
    return (
        <ZulaLayoutThreeColumn content={
            <>
                {data ?
                    data.items.map((book) => {
                        return book.translations.map(
                            (bookTranslation) => <ZulaBookTranslationCard bookId={book.id} bookTranslation={bookTranslation}/>
                        )
                    })
                    : <></>
                }
            </>
        } />
    )
}