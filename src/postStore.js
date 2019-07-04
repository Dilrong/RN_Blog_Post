import { observable } from 'mobx';

class PostStore{
    @observable text = 'hello';
}

const postStore = new PostStore();

export default postStore;