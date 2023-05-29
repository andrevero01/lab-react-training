function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div>{type}</div>
      <div>{number}</div>
      <div className="card-info">
        <span>
          Expires {expirationMonth}/{expirationYear} {bank}
        </span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
