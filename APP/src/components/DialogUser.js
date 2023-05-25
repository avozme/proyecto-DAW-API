import React, { useState, useEffect, useRef } from 'react';
import Label from '@/components/Label'
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

import InputError from '@/components/InputError';
import { Message } from 'primereact/message';

const DialogUser = ({ user, errors }) => {

    console.log('user: ', user);
    const validBirthDay = new Date(user.nacimiento);

    {/*Para obtener la fecha de nacimiento de los usuarios*/}
    let milisec = Date.parse(user.birth_date);
    let BirthDate = new Date(milisec);
    const types = ['client','administrator','owner'];

    const [dataForm, setDataForm] = useState(user);
    const [dropdownType, setDropdownType] = useState(user.type ? user.type : null);

    const handleInputChange = (e) => {
        const target = e.target;    //el elemento html <input name="X">Y</input>
        const value = target.value; //valor del input: Y
        const name = target.name;   //name del input: X

        if(name !== null){
            switch(name){
                case 'type': setDropdownType(value);break;
                // case 'nacimiento': formatDate(value); break;
            }

            dataForm[name] = value;
        }

        setDataForm(dataForm);
        console.log('dataForm: ', dataForm);

    }

    const formatDate = (date) => {
        console.log('fecha: ', date);
        const dateObject = new Date(date);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        // const hours = dateObject.getHours();
        // const minutes = dateObject.getMinutes();
        // const seconds = dateObject.getSeconds();

        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        // const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        // const mysqlDateFormat = `${formattedDate} ${formattedTime}`;

        console.log('MySQL date format: ', formattedDate)
        return formattedDate;
    }

    const submitForm = event => {
        event.preventDefault();

    }

    return(
        <div>
            <form onSubmit={submitForm} encType="multipart/form-data">
            <div className='field'>
                <Fieldset legend='Datos del usuario'>
                    <Label htmlFor='username'>Nombre de usuario: </Label>
                    <InputText name='username' id='userUsername' defaultValue={dataForm.username} onChange={handleInputChange} required />
                    {/* <Message severity="error" text="Username is required" /> */}
                    {/* <InputError messages={errors.username} /> */}

                    <br/>
                    <br/>
                    <Label htmlFor='password'>Contraseña: </Label>
                    <InputText name='password' id='userUsername' defaultValue={dataForm.password} onChange={handleInputChange} required/>
                    {/* type="password" */}
                    <br/>
                    <br/>
                    <Label htmlFor='password'>Confirmar contraseña: </Label>
                    <InputText name='password_c' id='userUsername' defaultValue={dataForm.password_C} onChange={handleInputChange} required/>
                    {/* type="password" */}
                    <br/>
                    <br/>
                    <Label htmlFor='name'>Nombre: </Label>
                    <InputText name='nombre' id='name' defaultValue={dataForm.nombre} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='surname1'>Primer apellido: </Label>
                    <InputText name='apellido' id='surname1' defaultValue={dataForm.apellido} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='surname2'>Segundo apellido:</Label>
                    <InputText name='apellido2' id='surname2' defaultValue={dataForm.apellido2} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <Label htmlFor='email'>Email: </Label>
                    <InputText name='email' type='email' id='userEmail' defaultValue={dataForm.email} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='fecha_nacimiento'>Fecha de nacimiento: </Label>
                    <Calendar id='birthDate' name='nacimiento' value={dataForm.nacimiento} onChange={handleInputChange} showIcon required/>
                    {/* <Calendar id='birthDate' name='nacimiento' value={dataForm.nacimiento} onChange={handleInputChange} showIcon required/> */}
                    <br/>
                    <Label htmlFor='type'>Tipo:</Label>
                    <Dropdown name="type" value={dropdownType} options={types} placeholder="Seleccione el tipo" onChange={handleInputChange}/>
                </Fieldset>
            </div>
            </form>
        </div>
    )
}

export default DialogUser;
