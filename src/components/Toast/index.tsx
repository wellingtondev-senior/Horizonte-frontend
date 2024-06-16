import ErrorMensagem from "./ErrorMensagem"
import SucessoMensagem from "./SucessoMensagem"

interface IToastComponent {
    title: string
    description: string
    error: boolean
}


const ToastComponent = ({ error, title, description }: IToastComponent) => {
    switch (error) {
        case true:
            return <ErrorMensagem title={title} description={description} />
        case false:
            return <SucessoMensagem title={title} description={description} />

    }
}

export default ToastComponent;