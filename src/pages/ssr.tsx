import { GetServerSideProps, NextPage } from "next"

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props;

        return <>
            <p>このページはサーバーサイドレンダリングによってアクセス時にサーバーで描画されたページです</p>
            <p>{message}</p>
        </>
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`
    console.log(message)

    return {
        props: {
            message,
        },
    }
}

export default SSR