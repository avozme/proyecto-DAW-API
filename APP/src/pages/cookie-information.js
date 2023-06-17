import GuestLayout from '@/components/Layouts/GuestLayout'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <div className="max-w-xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Aviso de Cookies</h1>
                <h3 className="text-xl font-bold mb-2">¿Qué son las cookies?</h3>
                <p className="mb-4">
                    Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web.
                    Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y,
                    dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
                </p>

                <h3 className="text-xl font-bold mb-2">¿Qué tipos de cookies utiliza esta página web?</h3>
                <p className="mb-4">
                    Esta página web utiliza los siguientes tipos de cookies:
                </p>

                <p className="mb-4">
                    <b>Cookies de análisis:</b> Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
                </p>

                <p className="mb-4">
                    <b>Cookies técnicas:</b> Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cabo el proceso de compra de un artículo.
                </p>

                <p className="mb-4">
                    <b>Cookies de personalización:</b> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo el idioma o el tipo de navegador a través del cual se conecta al servicio.
                </p>

                <p className="mb-4">
                    <b>Cookies publicitarias:</b> Son aquéllas que, bien tratadas por esta web o por terceros, permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web. Para ello podemos analizar sus hábitos de navegación en Internet y podemos mostrarle publicidad relacionada con su perfil de navegación.
                </p>

                <p className="mb-4">
                    <b>Cookies de publicidad comportamental:</b> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado. Este tipo de cookies almacenan información del comportamiento de los visitantes obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar avisos publicitarios en función del mismo.
                </p>

                <h3 className="text-xl font-bold mb-2">Desactivar las cookies.</h3>
                <p className="mb-4">
                    Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                </p>

                <p className="mb-4">
                    En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
                </p>

                <p className="mb-4">
                    A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:
                </p>

                <p className="mb-4">
                    <a
                    href="https://support.google.com/chrome/answer/95647?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    >
                    Configurar cookies en Google Chrome
                    </a>
                </p>

                <p className="mb-4">
                    <a
                    href="http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    >
                    Configurar cookies en Microsoft Internet Explorer
                    </a>
                </p>

                <p className="mb-4">
                    <a
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectlocale=es&amp;redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    >
                    Configurar cookies en Mozilla Firefox
                    </a>
                </p>

                <p className="mb-4">
                    <a
                    href="https://support.apple.com/es-es/HT201265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                    >
                    Configurar cookies en Safari (Apple)
                    </a>
                </p>

                <h3 className="text-xl font-bold mb-2">Cookies de terceros.</h3>

                <p className="mb-4">
                    Esta página web utiliza servicios de terceros para recopilar información con fines estadísticos y de uso de la web.
                    Se usan cookies de DoubleClick para mejorar la publicidad que se incluye en el sitio web.
                    Son utilizadas para orientar la publicidad según el contenido que es relevante para un usuario, mejorando así la calidad de experiencia en el uso del mismo.
                </p>

                <p className="mb-4">
                    En concreto, usamos los servicios de Google Adsense y de Google Analytics para nuestras estadísticas y publicidad.
                    Algunas cookies son esenciales para el funcionamiento del sitio, por ejemplo el buscador incorporado.
                </p>

                <p className="mb-4">
                    Nuestro sitio incluye otras funcionalidades proporcionadas por terceros.
                    Usted puede fácilmente compartir el contenido en redes sociales como Facebook, Twitter o Google +, con los botones que hemos incluido a tal efecto.
                </p>

                <h3 className="text-xl font-bold mb-2">Advertencia sobre eliminar cookies.</h3>

                <p className="mb-4">
                    Usted puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionará o la calidad de la página web puede verse afectada.
                </p>

                <p className="mb-4">
                    Si tiene cualquier duda acerca de nuestra política de cookies, puede contactar con esta página web a través de nuestros canales de Contacto.
                </p>
                <br/>
                <br/>
                </div>
        </GuestLayout>
    )
}

export default ForgotPassword