import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

    const wrapper = mount(Login)

describe('Login.vue', () => {
   
    it('CT1 - Renderizar a tag h1(html) identificando o login', () => {
        expect(wrapper.html()).toContain('<h1>Login</h1>')
    })
    
})