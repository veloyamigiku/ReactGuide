function Item01({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name}✅</li>
  }
  return <li className="item">{name}</li>
}

function Item02({ name, isPacked }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>
}

function Item03({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✅'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

function Item04({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && ' ✅'}
    </li>
  );
}

function Item05({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + " ✅";
  }
  return (
    <li className="item">
      {itemContent}
    </li>
  );
}

export default function PackingList() {
  return (
    <div>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item01
            isPacked={true}
            name="Space suit"
          />
          <Item01
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item01
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <section>
        <h1>Sally Ride's Packing List(null)</h1>
        <ul>
          <Item02
            isPacked={true}
            name="Space suit"
          />
          <Item02
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item02
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <section>
        <h1>Sally Ride's Packing List(?:)</h1>
        <ul>
          <Item03
            isPacked={true}
            name="Space suit"
          />
          <Item03
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item03
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <section>
        <h1>Sally Ride's Packing List(&&)</h1>
        <ul>
          <Item04
            isPacked={true}
            name="Space suit"
          />
          <Item04
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item04
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <section>
        <h1>Sally Ride's Packing List(if)</h1>
        <ul>
          <Item05
            isPacked={true}
            name="Space suit"
          />
          <Item05
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item05
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
    </div>
  );
}