import { CreateUrlMappingCommand } from "../../../model/command";
import { UrlMapping } from "../../../model/entity";

export interface UrlMappingProvider{
    createMapping: (command: CreateUrlMappingCommand) => Promise<UrlMapping>
}