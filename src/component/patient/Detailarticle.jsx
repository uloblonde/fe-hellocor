import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { API } from "../../config/api";

export default function Detailarticle(){
    let { id } = useParams("id")

    let { data: article } = useQuery('myArticlesCache', async () => {
        const response = await API.get('/article/' + id)
        return response.data.data;
    });

    return (
        <Container>
            <h3 className='text-bold mt-5'>{article?.title}</h3>
            <span className='text-muted'>{article?.CreatedAt.split("T")[0]}</span>
            <p className="text-muted">Author: <span style={{color:"#FF6185"}}>{article?.User.fullName}</span></p>
            <Card className='mb-5 shadow' style={{border:"none"}}>
                <div className='m-5'>
                    <div style={{width:"80%"}} className='mx-auto'>
                    <Card.Img style={{ height: '300px', objectFit: 'cover' }} src={article?.thumbnailArticle} />
                    </div>
                    <Card.Body className='mt-4'>
                            <p style={{textAlign:"justify"}}>
                                {article?.description}
                            </p>
                    </Card.Body>
                </div>
            </Card>
        </Container>
    ) 
}