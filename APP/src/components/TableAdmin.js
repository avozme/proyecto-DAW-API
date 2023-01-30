import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useAuth } from '@/hooks/auth';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import DialogStore from 'components/DialogStore';
import { Toast } from 'primereact/toast';
import { formatJson } from '@/helpers/helper';
import { Galleria } from 'primereact/galleria';

const TableAdmin = ({ fetchUrl, table }) => {

    const defaultImages= [
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria2.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria3.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria4.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
    ]

    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [itemDialog, setItemDialog] = useState(false);
    const [deleteItemDialog, setDeleteItemDialog] = useState(false);
    const [deleteDataDialog, setDeleteDataDialog] = useState(false);
    const [storesDialog, setStoresDialog] = useState(false);
    const [openImagesDialog, setOpenImagesDialog] = useState(false);
    const [item, setItem] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef(null);
    const dt = useRef(null);
    const [images, setImages] = useState(defaultImages);
    const galleria = useRef(null);

    useEffect(() => {
        fetch(fetchUrl)
          .then(response => response.json())
          .then(data => {
            setData(formatJson(data, table));
          })
          .catch(error => {
            console.log(error);
          });
      }, [fetchUrl]);

    if (!data.length) {
        return <div>No se han encontrado datos</div>
    }

    const JSONaddress = JSON.stringify(item.address);

    const openStores = () => {
        setStoresDialog(true);
    }

    const openImages = () => {
        setItemDialog(true);
    }

    const hidestoresDialog = () => {
        setStoresDialog(false);
    }

    const openNew = () => {
        setItem(emptyStore);
        setSubmitted(false);
        setItemDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setItemDialog(false);
    }

    const hideDeleteItemDialog = () => {
        setDeleteItemDialog(false);
    }

    const saveItem = () =>{
        setSubmitted(true);
        setItemDialog(false);

        console.log(item.name);

        if (item.name) {
            let _data = [...data];
            let _item = {...item};
            if (item.id) {
                const index = findIndexById(item.id);

                _data[index] = _item;
                toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Producto actualizado', life: 3000 });
            }
            else {
                _item.id = createId();
                _data.push(_item);
                toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Producto guardado', life: 3000 });
            }

            setData(_data);
            setItemDialog(false);
            setItem('');
        }
    }

    const editItem = (item) => {
        //console.log(data);
        setItem({...item});
        setItemDialog(true);
    }

    const confirmDeleteItem = (item) => {
        setItem(item);
        setDeleteItemDialog(true);
    }

    const deleteItem = () => {
        setDeleteItemDialog(false);
        toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Producto eliminado', life: 3000 });
    {/*
        let _data = data.filter(val => val.id !== item.id);
        setData(_data);
        setDeleteDataDialog(false);
        setItem('');
    }
    */}
    }

    const findIndexById = (id) => {
        let index = -1;

        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(let i = 0; i < 5; i++){
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    }

    {/**Aquí */}
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _item = {...item};
        _item[`${name}`] = val;

        setItem(_item);
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
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="space-x-4">
                    <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editItem(rowData)} />
                    <Button icon="pi pi-trash" className="p-button-rounded p-button-warning "  onClick={() => confirmDeleteItem(rowData)} />
                </div>
            </React.Fragment>
        );
    }
    const tiendasBodyTemplate = (rowData) => {
        return(
            <React.Fragment>
                <div className="space-x-4">
                    <Button label="Success" className="p-button-success p-button-text" onClick={() => openStores(rowData)} />
                </div>
            </React.Fragment>
        )
    }
    const imagesBodyTemplate = (rowData) => {
        return(
            <React.Fragment>
                <div className="space-x-4">
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Imágenes" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
                </div>
            </React.Fragment>
        )
    }

    const storesDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
        </React.Fragment>
    );

    const itemDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
        </React.Fragment>
    );

    const deleteItemDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteItemDialog} />
            <Button label="Sí" icon="pi pi-check" className="p-button-text" onClick={deleteItem} />
        </React.Fragment>
    );

    const paginatorButton = () => {
        return(
            <React.Fragment>
                <Button icon="pi pi-plus" className="p-button p-button-success mr-2" label="Nuevo" onClick={openNew} />
            </React.Fragment>
        )
    }

    const filteredData = data.map(item => {
        return Object.entries(item).reduce((acc, [key, value]) => {
          if (typeof value !== "object" || key === "tiendas" || key === "imágenes") {
            acc[key] = value;
          }
          return acc;
        }, {});
      });

    return (
        <div className="dataTable-crud">
            <Toast ref={toast} />

            <div className="card">

                {user && user.type === 'administrator' &&
                <DataTable value={data} responsiveLayout="scroll" paginator paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" paginatorLeft={paginatorButton} paginatorRight={' '} rows={5}>

                {Object.keys(filteredData[0]).map((key) => (
                        <Column field={key} header={key} key={key}/>
                    ))
                }
                {<Column field={'tiendas'} header={'tiendas'} key={'tiendas'} body={tiendasBodyTemplate}/>}
                {<Column field={'imágenes'} header={'imágenes'} key={'imágenes'} body={imagesBodyTemplate}/>}

                    <Column body={actionBodyTemplate} header='Acciones' exportable={false} style={{ minWidth: '8rem' }} key={data.id}/>
                </DataTable>
                }

            </div>

            <Dialog visible={storesDialog} style={{ width: '450px' }} header="Tiendas" modal className="p-fluid" footer={storesDialogFooter} onHide={hidestoresDialog}>

            </Dialog>
            <Dialog visible={itemDialog} style={{ width: '450px' }} header="CAMBIAR SEGÚN CORRESPONDA" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>

                {table === 'tienda' && <DialogStore store={item} address={JSONaddress} />}
            </Dialog>

            <Dialog visible={deleteItemDialog} style={{ width: '450px' }} header="Confirmar borrado" modal footer={deleteItemDialogFooter} onHide={hideDeleteItemDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}}/>
                    {item && <span>¿Seguro/a que quieres eliminar este item?</span>}
                </div>
            </Dialog>
        </div>
    )
}

export default TableAdmin;
