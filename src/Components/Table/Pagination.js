import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Pagination({ pageCount }) {
  const navigate = useNavigate();
  const { page } = useParams();

  // prvent page going over max page and below min page
  const checkValidUrl = (count) => {
    if (count < 1) return;
    if (count > pageCount.length) return;
    navigate(`/table/${count}`);
  };

  return (
    <div className="paginateWrapper">
      <div className="paginate">
        <button onClick={() => checkValidUrl(parseInt(page) - 1)}>Previous</button>
        {pageCount?.map((item, index) => {
          return (
            <button className={item === page * 1 ? 'activeBtn' : ''} key={index} onClick={() => checkValidUrl(item)}>
              {item}
            </button>
          );
        })}
        <button onClick={() => checkValidUrl(parseInt(page) + 1)}>Next</button>
      </div>
    </div>
  );
}
