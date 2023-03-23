'use strict'

export const preencherDados =  async (id) => {
    const url = `http://localhost:8080/v1/whatsapp/profile/id/${id}`
    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}