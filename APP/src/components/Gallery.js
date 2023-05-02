import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import axios from 'axios';

function Gallery( {rowData, table} ) {

    // console.log('rowData: ', rowData.id, ' - table: ', table);

    let defaultImages = [
        {
            itemImageSrc: '',
            thumbnailImageSrc: '',
            alt: '',
            title: '',
        },
    ];

    const [images, setImages] = useState(defaultImages);
    const [loading, setLoading] = useState();
    const galleria = useRef(null);

    // useEffect(() => {
    //     axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${rowData.id}`)
    //         .then(res => {
    //             let imagesToDisplay = [];

    //             if(res.data.length === 0) {
    //                 imagesToDisplay.push({
    //                     itemImageSrc: 'https://media.istockphoto.com/id/1319717836/es/vector/ning%C3%BAn-vector-de-icono-de-signo-de-c%C3%A1mara-de-fotos.jpg?s=170667a&w=0&k=20&c=UwNQQM1WyAQXWVayIwQlSefX-ycCuugxKo41nxzcSpc=',
    //                     alt: 'No hay imágenes disponibles.',
    //                     title: 'sin imágenes'
    //                 });
    //             }
    //             else{
    //                 res.data.map((item) => {
    //                     imagesToDisplay.push({
    //                         itemImageSrc: process.env.NEXT_PUBLIC_BACKEND_URL + item,
    //                         thumbnailImageSrc: process.env.NEXT_PUBLIC_BACKEND_URL + item,
    //                         alt: `Imagen de ${table}`,
    //                         title: `Imagen de ${rowData.nombre}`
    //                     });
    //                 });
    //             }
    //             setImages(imagesToDisplay);
    //         })
    // }, [])

    const getImage = async (itemId, table) => {
    // const getImage = () => {

        setLoading(true);

        // galleria.current.show();
        // setLoading(false);
        // setNewWindow(true)

        await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${itemId}`)
            .then(res => {
                let newImages = [];

                if(res.data.length === 0){
                    newImages.push({
                        itemImageSrc: 'https://media.istockphoto.com/id/1319717836/es/vector/ning%C3%BAn-vector-de-icono-de-signo-de-c%C3%A1mara-de-fotos.jpg?s=170667a&w=0&k=20&c=UwNQQM1WyAQXWVayIwQlSefX-ycCuugxKo41nxzcSpc=',
                        alt: 'No hay imágenes disponibles para esta tienda',
                        title: 'sin imágenes'
                    });
                }
                else{
                    res.data.map((item) => {
                        console.log('¿Qué me llega de back? ', item)
                        newImages.push({
                            itemImageSrc: process.env.NEXT_PUBLIC_BACKEND_URL + item,
                            thumbnailImageSrc: process.env.NEXT_PUBLIC_BACKEND_URL + item,
                            alt: `imagen de ${table}`,
                            title: `item id: ${itemId}`
                        });
                    });
                }

                setImages(newImages);
            })
            .then(() => {
                //*aquí* Las imágenes al borrar llegan bien del back, pero el seteo no actualiza
                console.log('Images: ', images);
                setLoading(false);

                galleria.current.show();
            })
            .catch(error => console.log('Ha ocurrido un error: ', error))
    }

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {

        //problema aquí: se ha probado esto y if(item), no renderiza src cuando se hace por segunda/tercera vez
        return <img src={item?.itemImageSrc} alt={item?.alt} style={{ width: '90%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        if(item.thumbnailImageSrc){
            return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '30%', display: 'inline-block' }} />;
        }
    }


    return (
        <div>
            <Galleria
                ref={galleria}
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={9}
                style={{ maxWidth: '50%' }}
                circular fullScreen showItemNavigators
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                activeIndex={0}
            />

            { loading == true ? <ProgressSpinner style={{width: '30%', height: '30%'}} strokeWidth="5" /> :
                <Button
                    label="Imágenes"
                    icon="pi pi-external-link"
                    onClick={() =>
                        getImage(rowData.id, table)
                        // getImage()
                    }
                />
            }
        </div>
    )
}

export default Gallery
