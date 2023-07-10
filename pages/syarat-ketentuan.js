import SyaratDanKetentuan from "../components/SyaratKetentuan";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title='Edarang CRM Platform | Kebijakan Privasi' />
      <Layout>
        <SyaratDanKetentuan />
      </Layout>
    </>
  );
}
