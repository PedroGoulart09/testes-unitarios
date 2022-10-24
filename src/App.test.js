import React from 'react';
import App, { calcularNovoSaldo } from './App';
import { fireEvent, render, screen } from '@testing-library/react'

describe('Componente Principal APP', () => {

    it('Nome da aplicação', () => {
        render(<App />)
        expect(screen.getByText('ByteBank')).toBeInTheDocument()
    })
   
    it('retorno do saque', () => {
        const valores = {
            transacao: 'saque',
            valor: 10
        }
        const newBalance = calcularNovoSaldo(valores, 30)
        expect(newBalance).toBe(20)

    })

    it('retorno do deposito', () => {
        const valores = {
            transacao: 'deposito',
            valor: 100
        }
        const newBalance = calcularNovoSaldo(valores, 200)
        expect(newBalance).toBe(300)

    })
})

describe('Verificar Transações', () => {
   /*  it('Verificar transação de saque', () => {
       render(<App />)

        const saldo = screen.getByText('R$ 1000')
        const transacao = screen.getByLabelText('Saque')
        const valor = screen.getByTestId('valor')
        const botaoTransacao = screen.getByText('Realizar operação')

        expect(saldo.textContent).toBe('R$ 1000')

        fireEvent.click(transacao, { target: { value: 'saque' } })
        fireEvent.change(valor, { target: { value: 10 } })
        fireEvent.click(botaoTransacao)

        expect(saldo.textContent).toBe('R$ 990')

    }) */

   /*  it('Verificar transação de deposito', () => {
        render(<App />)

        const saldo = screen.getByText('R$ 1000')
        const transacao = screen.getByLabelText('Depósito')
        const valor = screen.getByTestId('valor')
        const botaoTransacao = screen.getByText('Realizar operação')

        expect(saldo.textContent).toBe('R$ 1000')

        fireEvent.click(transacao, { target: { value: 'deposito' } })
        fireEvent.change(valor, { target: { value: 100 } })
        fireEvent.click(botaoTransacao)

        expect(saldo.textContent).toBe('R$ 1100')

    })
 */
   /*  it('Verificar transação de saque', () => {
        render(<App />)

        const saldo = screen.getByText('R$ 1000')
        const transacao = screen.getByLabelText('Saque')
        const valor = screen.getByTestId('valor')
        const botaoTransacao = screen.getByText('Realizar operação')

        expect(saldo.textContent).toBe('R$ 1000')

        fireEvent.click(transacao, { target: { value: 'saque' } })
        fireEvent.change(valor, { target: { value: 1001 } })
        fireEvent.click(botaoTransacao)

        expect(saldo.textContent).toBe('R$ 0')

    }) */

})
