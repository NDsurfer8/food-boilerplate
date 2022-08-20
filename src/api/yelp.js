import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer eTYCSChCkYcKALF7w6K84IM47_Gufko6zEQdsfWtZGPFvsX4Hp6BopsAl_EE-kFxdc4Nbf2azc2kE9UYPLbuOuOM70_IBVzDQdIfsr8ERt96EfTWqk-fn3wnhNn_YnYx'
    }
});



