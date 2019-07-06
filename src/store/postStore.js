import { observable } from 'mobx';

class PostStore{
    @observable text = '';
}

const postStore = new PostStore();

export default postStore;