// import React from 'react';
// import Style from './News.module.css'
// import { getNews } from '../../api'

// import { Card, CardTitle, CardText, Badge } from 'reactstrap';
// export default class News extends React.Component{

//     state = {
//         news: {}
//     }

//     async componentDidMount(){
//         this.setState({news: await getNews()})
//     }

//     render(){
//         const { news } = this.state;

        

//         if(!news.data){
//             return "Loading..."
//         }
//         // new Date(noticia.publishedAt
//         return (

//             news.data.articles.map((noticia, index) =>         
//             <div className={Style.card}>
//             <Card body className="text-center" outline color="secondary">
//               <CardTitle className={Style.title}>{noticia.title}</CardTitle>
//               <CardText>{noticia.description}</CardText>
//               <Badge href={noticia.url} target="_blank" color="secondary" outline>Go to news</Badge>
//             </Card>
//           </div>


//                     )
            
//         );
//     }

// }


// // }