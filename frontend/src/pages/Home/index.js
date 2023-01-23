import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

import navegantes from '../../assets/navegantes.jpg';
import dama from '../../assets/dama.jpg';
import porto from '../../assets/porto.JPG';

import { Container, Content } from './styles';

export const Home = () => {
  return (
    <Container>
      <Content>
        <h1>Pontos mais visitados</h1>
      </Content>

      <Box width="100%" display="flex" marginTop={4}>
        <Grid container>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={navegantes}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      color="rgb(243, 60, 42, 0.6)"
                      variant="h6"
                      marginLeft={2}
                      align="left"
                      fontWeight="bold"
                    >
                      NAVEGANTES RESTAURANTE
                    </Typography>

                    <Box
                      padding={2}
                      display="flex"
                      flexDirection="column"
                      marginTop={1}
                    >
                      <Typography
                        component="legend"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Avaliações
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        marginRight={22}
                      >
                        <Typography component="legend">4,6</Typography>
                        <Rating
                          name="read-only"
                          defaultValue={4.6}
                          precision={0.5}
                          readOnly
                        />
                      </Box>

                      <Typography
                        variant="subtitle1"
                        marginTop={2}
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Endereço
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        Rua das Codornas, 858 - Nova Piracicaba, Piracicaba -
                        SP, 13405-111
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Cozinhas
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        Mediterrânea
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Contato
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        +55 19 3421-1302
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Descrição
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        Frutos do mar em pratos elaborados, ambiente externo com
                        mesas ao ar livre.
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={dama}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      color="rgb(243, 60, 42, 0.6)"
                      variant="h6"
                      marginLeft={2}
                      align="left"
                      fontWeight="bold"
                    >
                      CERVEJARIA DAMA BIER
                    </Typography>

                    <Box
                      padding={2}
                      display="flex"
                      flexDirection="column"
                      marginTop={1}
                    >
                      <Typography
                        component="legend"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Avaliações
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        marginRight={22}
                      >
                        <Typography component="legend">4,7</Typography>
                        <Rating
                          name="read-only"
                          defaultValue={4.7}
                          precision={0.5}
                          readOnly
                        />
                      </Box>

                      <Typography
                        variant="subtitle1"
                        marginTop={2}
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Endereço
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        Av. Rio das Pedras, 104 - Piracicamirim, Piracicaba -
                        SP, 13420-590
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Contato
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        +55 19 98920-9937
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Descrição
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={7.5}>
                        Cervejaria artesanal possui bar de atmosfera intimista,
                        com música ambiente e gastronomia diversificada.
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={porto}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      color="rgb(243, 60, 42, 0.6)"
                      variant="h6"
                      marginLeft={2}
                      align="left"
                      fontWeight="bold"
                    >
                      PARQUE DA RUA DO PORTO
                    </Typography>

                    <Box
                      padding={2}
                      display="flex"
                      flexDirection="column"
                      marginTop={1}
                    >
                      <Typography
                        component="legend"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Avaliações
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        marginRight={22}
                      >
                        <Typography component="legend">4,8</Typography>
                        <Rating
                          name="read-only"
                          defaultValue={4.8}
                          precision={0.5}
                          readOnly
                        />
                      </Box>

                      <Typography
                        variant="subtitle1"
                        marginTop={2}
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Endereço
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={2}>
                        R. Antônio Corrêa Barbosa, 1628-1688 - Centro,
                        Piracicaba - SP, 13400-810
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#CF3526"
                      >
                        Descrição
                      </Typography>
                      <Typography variant="subtitle1" marginBottom={6}>
                        Entre as melhores opções de lazer de Piracicaba está o
                        Parque da Rua do Porto que proporciona contato com a
                        natureza em um ambiente acolhedor e de muita diversão.
                        Confira as dicas do especialista pra você aproveitar da
                        melhor forma.
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
