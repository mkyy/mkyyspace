import { PiWrapper } from './style.js';

export const PortfolioItem = props => {
  return (
    <PiWrapper>
      <div
        className='my-2 mx-auto p-relative bg-white shadow-1 blue-hover container-c'
        style={{
          width: '30vw',
          maxWidth: '400px',
          height: '550px',
          margin: '20px',
          overflow: 'hidden',
          borderRadius: '1px',
        }}
      >
        <img src={props.img} alt='' className='d-block w-full' />

        <div className='px-2 py-2 grow-1'>
          <h1
            className='ff-serif font-weight-normal text-black card-heading mt-0 mb-1'
            style={{ lineHeight: '1.25' }}
          >
            {props.title}
          </h1>

          <p className='mb-1'>{props.desc}</p>
        </div>

        <a
          target={'_blank'}
          href={props.src}
          className='text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link readmore'
        >
          View Page
        </a>
      </div>
    </PiWrapper>
  );
};
