import {Button, H, P, Raiting, Tag} from "../components";
import {useState} from "react";

export default function Home() {
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
            <Raiting rating={rating} isEditable={true} setRating={setRating}/>
        </>
    )
}
