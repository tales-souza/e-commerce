import User from '../models/User';
import md5 from 'md5';
import { Op } from 'sequelize';

class UserController {
    async index(req, res) {
        try {
            const users = await User.findAll();

            const response = await users.map((user) => {
                return {
                    email: user.email,
                    nome: user.nome,
                    datanascimento: user.datanascimento

                }
            })

            return res.json(response);

        } catch (e) {
            console.log(e);
            return res.json(e.message);
        }
    }
    async store(req, res) {
        try {
            // email é único... verifique se este email já existe
            const user = await User.findAll({
                where: {
                    email: req.body.email
                }
            });


            if (user.length > 0) {
                console.log(user);
                return res.json('User Already exists');
            }

            req.body.senha = md5(req.body.senha);


            await User.create(req.body);
            return res.json('ok')

        } catch (e) {
            return res.json(e.message)
        }
    }
    async indexById(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id_usuario: req.params.id_usuario
                }
            });
            return res.json({
                nome: user.nome,
                email: user.email,
                datanascimento: user.datanascimento,
                endereco: user.endereco
            });

        } catch (e) {

            return res.json(e.message);
        }

    }


    async update(req, res) {

        // não altera senha, existirá outra rota para isso
        try {
            if (req.body.senha) {
                return res.json('Nesta rota não se altera a senha');
            }

            // verifica se o novo email já existe pra em um novo cliente

            const user = await User.findAll({
                where: {
                    email: req.body.email,
                    id_usuario:{
                        [Op.ne]:req.params.id_usuario
                    }
                },

            });


            if (user.length > 0) {
                console.log(user);
                return res.json('Novo Email já existe');
            }

            await User.update(req.body, {
                where: {
                    id_usuario: req.params.id_usuario
                }
            });

            return res.json('ok');

        } catch (e) {
            return res.json(e.message);

        }


    }
}
export default new UserController();