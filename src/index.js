import Store from 'beedle';

const actions = {
    saySomething(context, payload) {
        context.commit('setMessage', payload);
    }
};

const mutations = {
    setMessage(state, payload) {
        state.message = payload;
        
        return state;
    }
};

const initialState = {
    message: 'Hello, world'
};

const storeInstance = new Store({
    actions, 
    mutations, 
    initialState
});

const textElement = document.querySelector('textarea');

textElement.addEventListener('input', () => {
    storeInstance.dispatch('saySomething', textElement.value.trim());
});

const messageElement = document.querySelector('.js-message-element');

storeInstance.subscribe(state => {
    messageElement.innerText = state.message;
}); 