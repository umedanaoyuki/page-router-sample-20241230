import { GetStaticProps, NextPage, NextPageContext } from "next";

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {

    const {message} = props;

    return <><p>{message}</p></>
}

// SSG
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にgetStaticPropsが実行されました`
    console.log(message)
    return {
        props: {
            message,
        },
    }
}

export default SSG