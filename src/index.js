// import printMe from './print.js';
// import _ from 'lodash';
// import { cube } from './math.js';
// function component() {
//     //var element = document.createElement('div');
//     var element = document.createElement('pre');
//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     // var btn = document.createElement('button');
//     // btn.innerHTML = 'Click me and check the cons!';
//     // btn.onclick = printMe;  
//     // element.appendChild(btn);
//       element.innerHTML = [
//           'Hello webpack!',
//           '5 cubed is equal to ' + cube(5)
//       ].join('\n\n');
//     return element;
//   }
  
//   document.body.appendChild(component());
  // if(module.hot) {
  //   module.hot.accept('./print.js',function() {
  //     console.log('Accepting the updated printMe module');
  //     printMe();
  //   })
  // }

  //动态引入
  // function getComponent() {
  //   return import(/* webpackChunkName:'loadsh'*/ 'lodash').then(_ => {
  //     let element = document.createElement('div');
  //     element.innerHTML = _.join(['Hello','webpack'],' ');
  //     return element;
  //   }).catch(error=>'An error')
  // }
  // getComponent().then(component=>{
  //   document.body.appendChild(component);
  // })


  //懒加载
  // function component() {
  //   var element = document.createElement('div');
  //   var button = document.createElement('button');
  //   var br = document.createElement('br');
  //   button.innerHTML = 'Click me and look at the console'
  //   element.appendChild(br);
  //   element.appendChild(button);
  //   button.onclick = e => import(/*webpackChunkName:print*/'./print').then(module=>{
  //     var print = module.default;
  //     print();
  //   });
  //   return element;
  // } 
  // document.body.appendChild(component());
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
       navigator.serviceWorker.register('/service-worker.js').then(registration => {
         console.log('SW registered: ', registration);
     }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
  function component() {
    var element = document.createElement('div');
    element.innerHTML = join(['Hello','webpack']);


    this.alert('Hmmm,this.probably')
    return element;
  }
  document.body.appendChild(component())
