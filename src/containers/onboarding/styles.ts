/*
   Copyright 2021 Queen’s Printer for Ontario

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

export const MainContainer = styled.SafeAreaView`
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;

export const SubContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.variables.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.variables.spacing.xxxlg}px;
`;

export const BottomContainer = styled.View`
  padding-horizontal: ${({theme}) => theme.variables.spacing.lg}px;
  padding-bottom: ${({theme}) => theme.variables.spacing.xmd}px;
`;

export const Scroll = styled.ScrollView``;

export const TitleText = styled.Text.attrs(() => ({
  accessibilityRole: 'header',
}))`
  font-family: ${({theme}) => theme.typography.fonts.ralewayBold};
  letter-spacing: ${({theme}) => theme.typography.letterSpacing.title}px;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.typography.fontSizes.header2}px;
  line-height: ${({theme}) => theme.typography.lineHeights.xlg}px;
  margin-bottom: ${({theme}) => theme.variables.spacing.xmd}px;
  margin-top: ${({theme}) => theme.variables.spacing.lg}px;
`;

export const SubtitleText = styled.Text`
  font-family: ${({theme}) => theme.typography.fonts.openSansRegular};
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.typography.fontSizes.body}px;
  line-height: ${({theme}) => theme.typography.lineHeights.lg}px;
  margin-bottom: ${({theme}) => theme.variables.spacing.md + 4}px;
`;

export const TermText = styled(SubtitleText)`
  margin-left: ${({theme}) => theme.variables.spacing.md + 4}px;
  margin-right: ${({theme}) => theme.variables.spacing.lg}px;
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: ${({theme}) => theme.typography.fonts.openSansRegular};
  font-size: ${({theme}) => theme.typography.fontSizes.body}px;
`;

export const Spacing = styled.View`
  height: ${({theme}) => theme.variables.borders.sm}px;
  margin-bottom: ${({theme}) => theme.variables.spacing.xmd}px;
  background-color: ${({theme}) => theme.colors.spacingBackgroundColor};
`;

export const CheckBoxTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${({theme}) => theme.variables.spacing.sm}px;
`;

const DefaultCheckBox = styled(CheckBox)`
  margin-left: ${({theme}) => theme.variables.spacing.xsm - 3}px;
  height: ${({theme}) => theme.variables.sizes.lg + 2}px;
  width: ${({theme}) => theme.variables.sizes.lg + 2}px;
`;

export const OpenVerifyCheckBox = styled(DefaultCheckBox).attrs(props => ({
  boxType: 'square',
  onFillColor: props.theme.colors.checkBoxFillColor,
  tintColor: props.theme.colors.checkBoxFillColor,
  onTintColor: props.theme.colors.checkBoxFillColor,
  onCheckColor: props.theme.colors.checkBoxCheckColor,
  disabled: false,
  tintColors: {
    true: props.theme.colors.checkBoxFillColor,
    false: props.theme.colors.checkBoxFillColor,
  },
}))``;

export const B = styled.Text`
  font-family: ${({theme}) => theme.typography.fonts.openSansBold};
`;

export const LinkText = styled.Text.attrs({
  accessible: true,
  accessibilityRole: 'link',
})`
  color: ${({theme}) => theme.colors.linkBlue};
`;

export const P = styled.Text`
  font-family: ${({theme}) => theme.typography.fonts.openSansRegular};
  font-size: ${({theme}) => theme.typography.fontSizes.regular}px;
  margin-bottom: ${({theme}) => theme.typography.fontSizes.regular}px;
  line-height: ${({theme}) => theme.typography.fontSizes.regular * 1.5}px;
`;

export const HeadingText = styled.Text`
  font-family: ${({theme}) => theme.typography.fonts.ralewayBold};
  letter-spacing: ${({theme}) => theme.typography.letterSpacing.title}px;
  color: ${({theme}) => theme.colors.textColor};
  font-size: ${({theme}) => theme.typography.fontSizes.header4}px;
  line-height: ${({theme}) => theme.typography.fontSizes.header4 * 1.4}px;
  margin-bottom: ${({theme}) => theme.variables.spacing.sm}px;
`;
