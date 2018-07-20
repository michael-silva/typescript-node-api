import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { name } = req.params;

    // Greet the given name
    res.send(`Hello, ${name}`);
});

// Export the express.Router() instance
export const WelcomeController: Router = router;