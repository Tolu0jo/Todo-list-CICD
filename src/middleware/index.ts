import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

class Middleware {
	handleValidationError(req: Request, res: Response, next: NextFunction) {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			return res.json(error.array()[0]);
		}
		next();
	}
}
export default new Middleware();

// #set ur workflow
// name: Node Github CI/CD 
// #check the git event we need to run the job, it tells the gitaction where/wen to be build the work flow it can be single or array of event  like branches:["develop","main"]
// on:
//    push:
//       branches:
//          - develop
// # job is like the services you want to run, specify the OS you want to run your workflow on = ubuntu latest
// jobs:
//   test:

//     runs-on: ubuntu-latest
// #strategy is where u specify the node version you want to run on 
//     strategy:
//       matrix:
//         node-version: [16.x,18.x]
//     steps:
//       - uses: actions/checkout@v2
//       - name: use Node.js ${{matrix.node-version}}
//         uses: actions/setup-node@v1
//         with:
//           node-version: ${{matrix.node-version}}
//       - name: yarn install and test
//         run:
//            yarn install
//            yarn test
//         env:
//           CI: true
  
       
       
  