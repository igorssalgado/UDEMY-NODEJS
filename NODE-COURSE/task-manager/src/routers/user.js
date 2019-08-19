const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const imgUpload = require('../middleware/imgUpload');

const router = new express.Router();

//to create a new user
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send()
    }
})

// { USER AVAILABLE
// 	"name": "Igor Salgado",
// 	"email": "ksks@kkkj.com",
// 	"password": "!saaaes2s$"
// }

// {
// 	"name": "Taynara Derbona",
// 	"email": "tay@gmail.com",
// 	"password": "m0z40s2"
// }

//to login with a user and gerating a session token
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.send({ user, token });
    } catch (e) {
        res.status(400).send("something wrong is not right");
    }
})

//to find all users
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
})


//to update a user by id
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid udpates!' })
    }

    try {
        // no longer need to fetch the user aby this param.. will acess from auth 
        // const user = await User.findById(req.user._id);

        updates.forEach((update) => req.user[update] = req.body[update]);

        await req.user.save();

        // user always exists as auth already run
        // if (!user) {
        //     return res.status(404).send();
        // }

        res.send(req.user);
    } catch (e) {
        res.status(400).send(e);
    }
})

//to delete a user by id
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user)

    } catch (e) {
        res.status(500).send(e);
    }
})

router.post('/users/me/avatar', auth, imgUpload.single('avatars'), (req, res) => {
        res.status(200).send('File uploaded successfully.');
}, (error, req, res, next) => {
    res.status(400).send({error: error.message});
});

module.exports = router;