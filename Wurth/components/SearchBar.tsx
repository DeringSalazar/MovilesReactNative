import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

interface SearchBarProps {
  onSearch?: (text: string) => void;
  placeholder?: string;
  showButton?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Buscar...',
  showButton = true,
  containerStyle,
  inputStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  const [searchText, setSearchText] = useState('');

  const handleChangeText = (text: string) => {
    setSearchText(text);
    onSearch?.(text);
  };

  const handleSearch = () => {
    onSearch?.(searchText);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#999999"
        value={searchText}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        blurOnSubmit
      />
      {showButton && (
        <Pressable style={[styles.button, buttonStyle]} onPress={handleSearch}>
          <Text style={[styles.buttonText, buttonTextStyle]}>Buscar</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    gap: 8,
    paddingVertical: 4,
  },
  input: {
    flex: 0.7,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    fontSize: 13,
    fontFamily: 'Open Sans',
    color: '#000000',    
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#D32F2F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Open Sans',
  },
});
