import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';

const Cv = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>Sono la pagina Cv</h1>
      </BasePage>
    </BaseLayout>
  )
}
export default Cv;
