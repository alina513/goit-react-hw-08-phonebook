const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#EBFAAE  ',
      minWidth: '100%',
    },
    title: {
      fontWeight: 600,
      fontSize: 50,
      textAlign: 'center',
    },
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to phonebook
        </h1>
      </div>
    );
  }
  