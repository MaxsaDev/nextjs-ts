import {Button, H, P, Rating, Tag} from "../components";
import {useState} from "react";
import {withLayout} from "../layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu}: HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <H variant='h1'>Text</H>
            <Button variant={'primary'} arrow={'right'}>Button</Button>
            <Button variant={'ghost'} arrow={'down'}>Button</Button>
            <P variant='l'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, alias architecto consectetur, consequatur distinctio exercitationem ipsam laborum libero modi molestiae mollitia optio, quas quasi reiciendis repudiandae unde? Perspiciatis, voluptatum.
            </P>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, alias architecto consectetur, consequatur distinctio exercitationem ipsam laborum libero modi molestiae mollitia optio, quas quasi reiciendis repudiandae unde? Perspiciatis, voluptatum.
            </P>
            <P variant='s'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci, alias architecto consectetur, consequatur distinctio exercitationem ipsam laborum libero modi molestiae mollitia optio, quas quasi reiciendis repudiandae unde? Perspiciatis, voluptatum.
            </P>
            <Tag variant='s'>Small</Tag>
            <Tag variant='m'>Medium</Tag>
            <Tag variant='m' color='grey'>Grey</Tag>
            <Tag variant='s' color='red'>Red</Tag>
            <Tag variant='m' color='primary'>Primary</Tag>
            <Tag variant='m' color='green'>Green</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
            <ul>
                {menu.map((item)=>(<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))}
            </ul>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {firstCategory});
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number,
}
