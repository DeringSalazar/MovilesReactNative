import { StyleSheet } from 'react-native';

export const autoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },

  scrollContent: {
    paddingTop: 0,
    paddingBottom: 10, 
  },

 
  productsContainer: {
    marginHorizontal: 10,
    marginBottom: 8,  
    marginTop: 0,    
    paddingTop: 0,   

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});