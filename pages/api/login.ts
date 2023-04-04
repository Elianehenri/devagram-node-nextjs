import type { NextApiRequest, NextApiResponse } from 'next';
import { conectarMongoDB } from '../../middlewares/conectarMongoDB';
import { RespostaPadraoMsg } from '../../types/RespostaPadraoMsg';
import md5 from 'md5';
import { UsuarioModel } from '../../models/usuarioModel';

const endpointLogin = async (req: NextApiRequest, res: NextApiResponse<RespostaPadraoMsg>
) => {
    if (req.method === 'POST') {
        const { login, senha } = req.body;

        const usuariosEncontrados = await UsuarioModel.find({ email: login, senha: md5(senha) });
        if (usuariosEncontrados && usuariosEncontrados.length > 0) {
            const usuarioEncotrado = usuariosEncontrados[0];

            // const token = jwt.sign({_id : usuarioEncotrado._id}, MINHA_CHAVE_JWT);
            // return res.status(200).json({
            //nome: usuarioEncotrado.nome,
            // email: usuarioEncotrado.email,
            // token
            // });
        }
        return res.status(400).json({ erro: 'Usuario ou senha nao encontrado' });
    }
    return res.status(405).json({ erro: 'Metodo informado nao e valido' });
}

export default conectarMongoDB(endpointLogin);
