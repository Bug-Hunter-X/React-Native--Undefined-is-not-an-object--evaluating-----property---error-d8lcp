```javascript
// bug.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData({ name: 'John Doe' });
    }, 1000);
  }, []);

  // Incorrect way: Trying to access data before it's loaded
  // return <Text>Name: {data.name}</Text>;

  // Correct way: Conditional rendering
  return (
    <View>
      {data ? <Text>Name: {data.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;

```

```javascript
// bugSolution.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData({ name: 'John Doe' });
    }, 1000);
  }, []);

  // Correct way: Conditional rendering
  return (
    <View>
      {data ? <Text>Name: {data.name}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;
```