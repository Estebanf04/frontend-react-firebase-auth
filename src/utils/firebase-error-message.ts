
    export function formatFirebaseMessages(message: string | undefined) {
        if(message?.includes('auth/invalid-email')) return 'El email ingresado no es valido'
        if(message?.includes('least 6 characters')) return 'La contraseña debe tener mas de 6 caracteres'
        if(message?.includes('auth/email-already-in-use')) return 'Este email ya esta en uso'
        if(message?.includes('missing')) return 'Campos obligatorios'
        if(message?.includes('auth/invalid-credential')) return 'Credenciales invalidas'
        if(message?.includes('popup-closed-by-user')) return 'Ventana cerrada'
    }