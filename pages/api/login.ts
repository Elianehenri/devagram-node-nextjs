import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse 
) => {
        if (req.method === 'POST') {
           const {login, senha} = req.body;

              if (login === 'admin' && senha === 'admin'){
                return res.status(200).json({msg : 'Usuario logado com sucesso'});
            }
                return res.status(400).json({erro : 'Usuario ou senha nao encontrado'});
            }
            return res.status(405).json({erro : 'Metodo informado nao e valido'});
        }
    
