import React from 'react'
import api from "./api"
import {screen, render, fireEvent} from '@testing-library/react'
import App from './App'
import Conta from './conta/Conta'


jest.mock('./api')


describe('Verificar integracao api', () => {
    it('avaliar retorno api', async () => {
        api.listaTransacoes.mockResolvedValue([
            {
                "valor": "10",
                "transacao": "saque",
                "data": "10/08/2020",
                "id": 1
              },
              {
                "transacao": "deposito",
                "valor": "20",
                "data": "26/09/2020",
                "id": 2
              },
            ])

        render(<App />)

        await screen.findByText('saque')   
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
  
  it('testar se o botao de operacao é chamado', () => {
    const realizarTransacao = jest.fn()
    render(<Conta saldo={1000} realizarTransacao={realizarTransacao} />)
    
    const takeButton = screen.getByText('Realizar operação')
    fireEvent.click(takeButton)

    expect(realizarTransacao).toHaveBeenCalled()
  })
})