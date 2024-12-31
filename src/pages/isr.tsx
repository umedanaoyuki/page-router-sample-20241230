import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props

    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading....</div>
    }

    return (
        <>
          <p>{message}</p>  
        </>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async () => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}にこのページのgetStaticPropsが実行されました`

    return {
        props: {
            message,
        },
        // ページの有効期限（秒単位）
        revalidate: 60,
    }
}

export default ISR