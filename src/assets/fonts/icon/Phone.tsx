type Props = {};

function Phone({}: Props) {
  return (
    <div style={{ width: '22px', height: '22px' }}>
      <svg className='svg-icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <path d='M513 63.868c-247.519 0-448.177 200.654-448.177 448.177 0 247.519 200.658 448.177 448.177 448.177s448.177-200.658 448.177-448.177c0-247.522-200.658-448.177-448.177-448.177z m215.252 693.101c-236.958 27.438-409.066-192.063-466.435-321.765-48.461-109.562 24.106-174.632 47.808-192.199 4.282-3.169 9.463-4.852 14.79-4.852h35.731a24.936 24.936 0 0 1 22.902 15.07l50.449 117.04a24.942 24.942 0 0 1-2.268 23.88l-31.867 46.967c-5.063 7.459-5.663 17.05-1.698 25.147 47.914 97.782 154.148 148.552 194.7 164.942 9.55 3.864 20.491 1.404 27.521-6.131l46.141-49.434a24.95 24.95 0 0 1 28.739-5.607l110.611 51.355c8.305 3.856 13.904 11.953 14.406 21.091 4.962 89.813-91.53 114.496-91.53 114.496z' />
      </svg>
    </div>
  );
}

export default Phone;
